export const GuestItem = ({ name = "Micheal Smith" }) => {
  const colors = ["#0A6CF4", "#1880AC"];
  const randomPick = Math.round(Math.random() * 1);
  return (
    <div className="flex-align">
      <section
        className="guest-initial"
        style={{ background: colors[randomPick] }}
      >
        {name.substr(0, 1)}
      </section>
      <p className="guest-name ml-2">{name}</p>
    </div>
  );
};
