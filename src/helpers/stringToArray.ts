function stringToArray(string: string, separator: string = ","): string[] {
  return string.split(separator).reduce((acc: string[], value: string) => {
    const trimmed = value.trim();
    if (trimmed !== "") acc.push(trimmed);
    return acc;
  }, []);
}

export default stringToArray;
