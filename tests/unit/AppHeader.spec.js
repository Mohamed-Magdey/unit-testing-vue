import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  test('If user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader)
    const button = wrapper.find('button')
    expect(button.isVisible()).toBe(false)
  })

  test('If user is logged in, show logout button', async () => {
    const wrapper = mount(AppHeader)
    const button = wrapper.find('button')
    await wrapper.setData({ loggedIn: true })
    // await wrapper.vm.$nextTick()
    expect(button.isVisible()).toBe(true)
  })
})