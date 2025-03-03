const appName = 'coffee-delivery'

export const LocalStorage = {
  setItem(key: string, value: string) {
    localStorage.setItem(`${appName}:${key}`, value)
  },

  getItem(key: string) {
    return localStorage.getItem(`${appName}:${key}`)
  }
}
