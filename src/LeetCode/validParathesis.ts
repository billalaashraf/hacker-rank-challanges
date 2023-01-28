function isValidParathesis(s: string): boolean {
  const parathesis: string[] = [];
  const pairs: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (const char of s) {
    if (Object.keys(pairs).includes(char)) {
      parathesis.push(char);
    } else if (Object.values(pairs).includes(char)) {
        const key: string = parathesis.pop() || "";
        if (char !== pairs[key]) return false; 
    }
  }
  return parathesis.length === 0;
}

export default isValidParathesis;
