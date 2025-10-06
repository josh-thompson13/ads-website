export function withBasePath(path: string) {
  if (!path) return path;
  if (path.startsWith("http")) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!base) return path;
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}
