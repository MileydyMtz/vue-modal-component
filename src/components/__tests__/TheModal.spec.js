import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Modal from '../TheModal.vue'

describe('Modal', () => {
    it('renders title properly', () => {
        const title = 'Test Modal'
        const wrapper = mount(Modal, { 
        props: { 
            isOpen: true,
            title: title,
        } 
        })
        expect(wrapper.text()).toContain(title)
    })

    it('is hidden when isOpen is false', () => {
        const wrapper = mount(Modal, { 
        props: { 
            isOpen: false,
            title: 'Test Modal',
        } 
        })
        expect(wrapper.isVisible()).toBe(false)
    })

    it('emits close event on close method call', async () => {
        const wrapper = mount(Modal, { 
        props: { 
            isOpen: true,
            title: 'Test Modal',
        } 
        })
        await wrapper.vm.close()
        expect(wrapper.emitted()).toHaveProperty('close')
    })
})
