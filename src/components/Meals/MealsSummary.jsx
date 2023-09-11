import classses from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className = {classses.maindiv}>
    <div className = {classses.summarydiv}>
      <p>
        Meals are a fundamental aspect of our daily lives, serving not only as a
        means of nourishment but also as a social and cultural cornerstone. They
        provide our bodies with the essential nutrients required for energy,
        growth, and overall well-being. Meals come in various forms and sizes,
        from hearty breakfasts to leisurely dinners and everything in between.
        They often bring people together, fostering connections and traditions
        that transcend the act of eating itself.
      </p>
    </div>
    </section>
  );
};

export default MealsSummary;
