// @flow
import path from 'path'
import {ROUTE_NAME_REGEX, IS_BUNDLED_PAGE_REGEX, CLIENT_STATIC_FILES_RUNTIME_MAIN} from 'next-server/constants'

// This plugin creates a build-manifest.json for all assets that are being output
// It has a mapping of "entry" filename to real filename. Because the real filename can be hashed in production
export default class BuildManifestPlugin {
  apply (compiler: any) {
    compiler.hooks.emit.tapPromise('NextJsBuildManifest', async (compilation, callback) => {
      const {chunks} = compilation
      const assetMap = {}

      const mainJsChunk = chunks.find((c) => c.name === CLIENT_STATIC_FILES_RUNTIME_MAIN)
      const mainJsFiles = mainJsChunk && mainJsChunk.files.length > 0 ? mainJsChunk.files.filter((file) => /\.js$/.test(file)) : []

      // compilation.entrypoints is a Map object, so iterating over it 0 is the key and 1 is the value
      for (const [, entrypoint] of compilation.entrypoints.entries()) {
        const result = ROUTE_NAME_REGEX.exec(entrypoint.name)
        if (!result) {
          continue
        }

        const pagePath = result[1]

        if (!pagePath) {
          continue
        }

        const filesForEntry = []
        for (const chunk of entrypoint.chunks) {
          // If there's no name or no files
          if (!chunk.name || !chunk.files) {
            continue
          }

          for (const file of chunk.files) {
            if (/\.map$/.test(file) || /\.hot-update\.js$/.test(file)) {
              continue
            }

            // Only `.js` and `.css` files are added for now. In the future we can also handle other file types.
            if (!/\.js$/.test(file) && !/\.css$/.test(file)) {
              continue
            }

            // The page bundles are manually added to _document.js as they need extra properties
            if (IS_BUNDLED_PAGE_REGEX.exec(file)) {
              continue
            }

            filesForEntry.push(file.replace(/\\/g, '/'))
          }
        }

        assetMap[pagePath.replace(/\\/g, '/')] = [...filesForEntry, ...mainJsFiles]
      }

      for (const [, entrypoint] of compilation.entrypoints.entries()) {
        const manifestFile = path.join('server', entrypoint.name.replace(/\.js$/, '-assets.json'))

        const result = ROUTE_NAME_REGEX.exec(entrypoint.name)
        if (!result) {
          continue
        }

        const pagePath = result[1]

        if (!pagePath) {
          continue
        }

        const assets = [
          ...new Set([
            ...(assetMap['/_app'] || []),
            ...(assetMap['/_error'] || []),
            ...(assetMap[pagePath.replace(/\\/g, '/')] || [])
          ])
        ]
        const json = JSON.stringify({assets})

        compilation.assets[manifestFile] = {
          source () {
            return json
          },
          size () {
            return json.length
          }
        }
      }
    })
  }
}
