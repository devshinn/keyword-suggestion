export const isEmpty = (data: any) => {
  return data.length === 0;
};

export const is단모음단자음 = (query: string) => {
  const lastCharacter = query.charAt(query.length - 1);
  const pattern = /[ㄱ-ㅎㅏ-ㅣ]/;
  return pattern.test(lastCharacter);
};
