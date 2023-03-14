export function getNow(): string {
    const currentDate = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric' as const,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return currentDate.toLocaleString('he-IL', options);
}
