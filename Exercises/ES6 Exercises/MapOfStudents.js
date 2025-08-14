let studentMap =  new Map()

studentMap.set("student1", "iradukunda1")
studentMap.set("student2", "iradukunda2")
studentMap.set("student3", "iradukunda3")
studentMap.set("student4", "iradukunda4")
studentMap.set("student5", "iradukunda5")

console.log(studentMap.get('student1'))

studentMap.delete("student1")

console.log(studentMap)