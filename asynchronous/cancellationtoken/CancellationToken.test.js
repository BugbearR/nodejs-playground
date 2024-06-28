import CancellationToken from './CancellationToken';

describe('CancellationToken', () => {
    let token;

    beforeEach(() => {
        token = new CancellationToken();
    });

    test('should initialize with isCancelled as false', () => {
        expect(token.isCancelled).toBe(false);
    });

    test('should set isCancelled to true on cancel', () => {
        token.cancel();
        expect(token.isCancelled).toBe(true);
    });

    test('should not execute callbacks immediately when not cancelled', () => {
        const mockCallback = jest.fn();
        token.register(mockCallback);
        expect(mockCallback).not.toHaveBeenCalled();
    });

    test('should execute callbacks once cancelled', () => {
        const mockCallback = jest.fn();
        token.register(mockCallback);
        token.cancel();
        expect(mockCallback).toHaveBeenCalled();
    });

    test('should execute callbacks immediately if already cancelled', () => {
        token.cancel();
        const mockCallback = jest.fn();
        token.register(mockCallback);
        expect(mockCallback).toHaveBeenCalled();
    });

    test('should not execute callbacks more than once when cancelled multiple times', () => {
        const mockCallback = jest.fn();
        token.register(mockCallback);
        token.cancel();
        token.cancel(); // Cancel again
        expect(mockCallback).toHaveBeenCalledTimes(1);
    });
});
