import { helper } from '@ember/component/helper';

export function trimMarkdown([str]) {
  const lines = str.split("\n")

  if (!lines[0].length) lines.shift()

  const indentation = lines[0].match(/^\s*/)[0].replace(/\s/g, "\\s")
  const regex       = new RegExp(`^${indentation}`)

  return lines
    .map(line => line.replace(regex, ""))
    .join("\n")
}

export default helper(trimMarkdown);
