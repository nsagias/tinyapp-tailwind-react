
export async function copyToClipboard (copy: string): Promise<void> {
  await navigator.clipboard.writeText(copy);
}
