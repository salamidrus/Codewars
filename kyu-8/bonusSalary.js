function bonusTime(salary, bonus) {
  // your code here
  return bonus ? `£${salary * 10}` : "£" + salary;
}

// improved solution
const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;
