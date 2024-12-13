export default function getPersonParams(obj) {
  const ans = [];
  for (let elem of obj.special) {
    const { id, name, icon, description = "Описание недоступно" } = elem;
    ans.push({
      id: id,
      name: name,
      icon: icon,
      description: description,
    });
  }
  return ans;
}
