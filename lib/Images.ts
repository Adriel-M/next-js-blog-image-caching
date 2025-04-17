import RequireContext = __WebpackModuleApi.RequireContext
const importFromFolder = (context: RequireContext) => {
  const images: Record<string, { default: { src: string } }> = {}

  for (const key of context.keys()) {
    // keys are duplicated in a sense that there are two keys for the same image
    // one with a relative path from the import folder and a full path from the root
    if (!key.startsWith('public/static/images')) continue

    const newKey = key.replace('public/static/images', '/static/images')
    images[newKey] = context(key)
  }

  return images
}

const getImages = () => {
  const keyToModule = importFromFolder(require.context('../public/static/images', true, /\.(png|jpe?g|svg|webp)$/))
  const keyToPath: Record<string, string> = {}

  for (const [key, value] of Object.entries(keyToModule)) {
    keyToPath[key] = value.default.src
  }

  return keyToPath
}

export default getImages()
