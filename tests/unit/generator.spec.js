import { shallowMount } from '@vue/test-utils';
import Generator from '@/components/Generator.vue';

describe('HelloWorld.vue', () => {
  it('Inicialización de los parametros', () => {
    const message = '';
    const wrapper = shallowMount(Generator, {
      props: { message },
    });
    expect(wrapper.vm.message).toMatch(message);
    expect(wrapper.vm.messageEncrypt).toMatch('');
  });
  it('No ejecutar si el mensaje está vacio', () => {
    const message = '';
    const wrapper = shallowMount(Generator, {
      props: { message },
    });
    wrapper.vm.encryptMessage();
    expect(wrapper.vm.messageEncrypt).toMatch('');
  });
  it('Mensaje encriptado', () => {
    const message = 'ENLABE';
    const wrapper = shallowMount(Generator, {
      props: { message },
    });
    wrapper.vm.encryptMessage();
    const encryptMessage = message.split('').map(
      (msg) => String.fromCharCode(msg.charCodeAt(0) + 1),
    ).join('');
    expect(wrapper.vm.messageEncrypt).toMatch(encryptMessage);
  });
});
