const imageModules = import.meta.glob('../assets/images/**/*.{svg,png,jpg,jpeg}', { eager: true })
const imageLibrary = Object.fromEntries(
  Object.entries(imageModules).map(([path, module]) => {
    const fileName = path.split('/').pop()
    const key = fileName.replace(/\.(svg|png|jpg|jpeg)$/i, '')
    return [key, module.default]
  })
)

export default imageLibrary
