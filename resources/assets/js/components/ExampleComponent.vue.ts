import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class ExampleComponent extends Vue {
    mounted() {
        console.log('Component mounted.')
    }
}
