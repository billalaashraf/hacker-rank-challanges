function validParathesis(s: string): boolean {
  const parathesis: string[] = [];
  const pairs: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const keys = Object.keys(pairs);
  const values = Object.values(pairs);
  for (const char of s) {
    if (keys.includes(char)) {
      parathesis.push(char);
    } else if (values.includes(char)) {
        const key: string = parathesis.pop() || "";
        if (char !== pairs[key]) return false; 
    }
  }
  return parathesis.length === 0;
}

export default validParathesis;
