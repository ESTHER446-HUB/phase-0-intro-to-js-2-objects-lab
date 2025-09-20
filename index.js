const employee = {
  name: "Edwin",
  streetAddress: "Karen"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

const newEmployee1 = updateEmployeeWithKeyAndValue(employee, "name", "Nosh");

const newEmployee2 = updateEmployeeWithKeyAndValue(employee, "streetAddress", "mogogosiek");


// ✅ Destructively updates the employee object
// The test will provide an 'employee' object when it calls this function.
// We do NOT declare a global employee here to avoid conflicts.

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Directly change the object that was passed in
  employee[key] = value;

  // Return the same object (now updated)
  return employee;
}

// If your lab requires exporting functions (check the instructions):
// module.exports = destructivelyUpdateEmployeeWithKeyAndValue;


function deleteFromEmployeeByKey(employee, key) {
  // 1. Clone the employee object
  const newEmployee = { ...employee };

  // 2. Delete the given key from the clone
  delete newEmployee[key];

  // 3. Return the clone (original employee stays unchanged)
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}