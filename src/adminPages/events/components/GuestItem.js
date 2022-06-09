export const GuestItem = ({ name  }) => {
  const colors = ["#0A6CF4", "#1880AC"];
  const randomPick = Math.round(Math.random() * 1);
  console.log(name);
  return (
    <div className="flex-align">
      <section
        className="guest-initial"
        style={{ background: colors[randomPick] }}
      >
      
      </section>
      <p className="guest-name ml-2">{name}</p>
    </div>
  );
};
