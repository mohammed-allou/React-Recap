import { useToggle } from './Hooks'
import { renderHook, act } from "@testing-library/react-hooks";

test('toggleHook', () => {
    const { result } = renderHook(() => useToggle(true))
    expect(result.current[0]).toBeFalsy()
})