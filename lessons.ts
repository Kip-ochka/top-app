// DetailedHTMLProps<A<T>, T>
// Во-первых ищем специфичные SomethingHTMLAttributes если их нет, то используем HTMLAttributes
// Во-вторых ищем корректный тип HTMLSomethingElement и используем его в дженериках под литерой Т
// В итоге если упростить и сказать по тупому то алгос такой:
// export default interface NeedProps extends 
//          <DetailedHTMLProps<SomethingHTMLAttributes (или) HTMLAttributes <HTMLSomethingElement>, HTMLSomethingElement>

// Имя тега можно передавать строкой пропсами - удобно если нужно создавать какой то специфичный JSX тег и не городить условия
// 100% нужно типизировать такой пропс, что бы не получилось, что хотел сделать стили для заголовков, а потом использовал его
// как форму.

