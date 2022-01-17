chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    type: 'normal',
    id: 'Text',
    title: 'Copy URL with Title',
    onclick: (_, tab) => {
      if (tab) {
        const { url, title } = tab
        const text = `[] ${title}\n${url}\n`
        copy(text)
      }
    },
  })
  chrome.contextMenus.create({
    type: 'normal',
    id: 'Markdown',
    title: 'Copy URL with Title (Markdown)',
    onclick: (_, tab) => {
      if (tab) {
        const { url, title } = tab
        const text = `[${title}](${url})\n`
        copy(text)
      }
    },
  })
})

const copy = (str: string) => {
  const text = document.createElement('textarea')
  text.textContent = str
  document.body.appendChild(text)
  text.select()
  document.execCommand('copy')
  text.blur()
  document.body.removeChild(text)
}
