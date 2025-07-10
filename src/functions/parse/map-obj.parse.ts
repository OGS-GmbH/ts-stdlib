// eslint-disable-next-line @tseslint/no-explicit-any
export function parseMapToObject (map: Map<any, any>): object | undefined {
	// eslint-disable-next-line @tseslint/no-unsafe-assignment
	const obj: object | undefined = Object.fromEntries(map);

	return obj && Object.keys(obj).length > 0 ? obj : undefined;
}
