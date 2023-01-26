import {shallowMount} from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'
import {pokemons} from '../mocks/pokemons.mock'

describe('PokemonOptions', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons: pokemons
            }
        })
    })

    test ('Debe de hacer match con el snapshot', () => {

        console.log(wrapper.html())

        expect(wrapper.html()).toMatchSnapshot()

    })

    test ('Debe de mostrar las 4 opciones correctamente', () => {

        const liTags = wrapper.findAll('li')
        expect(liTags.length).toBe(4)

        const [li1, li2, li3, li4] = wrapper.findAll('li')
        expect(li1.text()).toBe('bulbasaur')
        expect(li2.text()).toBe('ivysaur')
        expect(li3.text()).toBe('venusaur')
        expect(li4.text()).toBe('charmander')

    })

    test ('Debe de emitir "selection" con sus respectivos parámetros al hacer click', () => {

        const [li1, li2, li3, li4] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        console.log(wrapper.emitted('selection'))

        expect(wrapper.emitted('selection').length).toBe(4)
        expect(wrapper.emitted('selection')[0]).toEqual([1])
        expect(wrapper.emitted('selection')[1]).toEqual([2])
        expect(wrapper.emitted('selection')[2]).toEqual([3])
        expect(wrapper.emitted('selection')[3]).toEqual([4])

    })

})