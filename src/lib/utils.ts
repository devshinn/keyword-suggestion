export const isEmpty = (data: any) => {
  return data.length === 0;
};

export const isPass = (query: string) => {
  const lastCharacter = query.charAt(query.length - 1);
  if (lastCharacter === ' ') return true;
  const pattern = /[ㄱ-ㅎㅏ-ㅣ]/;
  return pattern.test(lastCharacter);
};
