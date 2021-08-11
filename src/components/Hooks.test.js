import { useToggle } from './Hooks';
import { renderHook, act } from "@testing-library/react-hooks";

test('toggleHook', () => {
    const { result } = renderHook(useToggle)
    act(() => {
        result.current.handleClick()
    })
    expect(result.current.state).toBeTruthy()
    // console.log('Hooks log', result.current[0])
})