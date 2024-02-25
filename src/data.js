const data = [
      {
        "id": 1,
        "name": "Dr. John Smith",
        "gender": "Male",
        "specialist": "Cardiologist",
        "url": "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1708732800&semt=sph"
      },
      {
        "id": 2,
        "name": "Dr. Emily Johnson",
        "gender": "Female",
        "specialist": "Pediatrician",
        "url": "https://media.istockphoto.com/id/497142181/photo/physician.jpg?s=612x612&w=0&k=20&c=PX_lRXXQo7lUpE1Slj2vHsiCnZZnVNF_OX99-ag6O_8="
      },
      {
        "id": 3,
        "name": "Dr. Michael Williams",
        "gender": "Male",
        "specialist": "Dermatologist",
        "url": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg="
      },
      {
        "id": 4,
        "name": "Dr. Sarah Brown",
        "gender": "Female",
        "specialist": "Neurologist",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVdnioOpHq402Hsf0FGtSIftHU6sF1KC2-aY4QewDs0uzRnWQ92xlHhoP0Gg&s"
      },
      {
        "id": 5,
        "name": "Dr. David Martinez",
        "gender": "Male",
        "specialist": "Orthopedic Surgeon",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-ebxlvQiGDnKG0mzM2Cb2b7FzgK7fFR_9c5IzW130ayukacHZG4BmKNe8A&s"
      },
      {
        "id": 6,
        "name": "Dr. Jennifer Lee",
        "gender": "Female",
        "specialist": "Ophthalmologist",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pyho9Ht9pEK_1vKYxjkQ9kNfXC2u-KWldwGING7Mn-e7lx92CgSH8EbzAg&s"
      },
      {
        "id": 7,
        "name": "Dr. Christopher Taylor",
        "gender": "Male",
        "specialist": "Psychiatrist",
        "url": "https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg"
      },
      {
        "id": 8,
        "name": "Dr. Elizabeth Clark",
        "gender": "Female",
        "specialist": "Gynecologist",
        "url": "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
      },
      {
        "id": 9,
        "name": "Dr. Daniel Rodriguez",
        "gender": "Male",
        "specialist": "Urologist",
        "url": "https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg"
      },
      {
        "id": 10,
        "name": "Dr. Jessica Hall",
        "gender": "Female",
        "specialist": "Endocrinologist",
        "url": "https://media.istockphoto.com/id/638647058/photo/we-offer-our-patients-premium-healthcare-here.jpg?s=612x612&w=0&k=20&c=pek5ehwgsZNPemeEh4bObQ1U5DRPEs0WHleosG-daa8="
      },
      {
        "id": 11,
        "name": "Dr. Andrew Baker",
        "gender": "Male",
        "specialist": "Oncologist",
        "url": "https://poonawallafincorp.com/img/medical-equipment-loan-for-doctors-vp.jpg"
      },
      {
        "id": 12,
        "name": "Dr. Lauren White",
        "gender": "Female",
        "specialist": "Rheumatologist",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQpUF3kitpEnR1Mcu0bFLlZPeKXXwcwvQvcaWoGkuzA&s"
      },
      {
        "id": 13,
        "name": "Dr. Matthew Scott",
        "gender": "Male",
        "specialist": "Gastroenterologist",
        "url": "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg"
      },
      {
        "id": 14,
        "name": "Dr. Amanda Green",
        "gender": "Female",
        "specialist": "Allergist",
        "url": "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg"
      },
      {
        "id": 15,
        "name": "Dr. Kevin Harris",
        "gender": "Male",
        "specialist": "Pulmonologist",
        "url": "https://thumbs.dreamstime.com/b/portrait-positive-black-doctor-holding-medical-chart-male-over-white-background-178499631.jpg"
      },
      {
        "id": 16,
        "name": "Dr. Stephanie King",
        "gender": "Female",
        "specialist": "Nephrologist",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMjKMsSCNuRO1MapvZIUCx2eo4cyMlzagtQtN8AZm-A&s"
      },
      {
        "id": 17,
        "name": "Dr. Joshua Martinez",
        "gender": "Male",
        "specialist": "Hematologist",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQ-3SxLMTcBFgrRcQH6sJTfPZ2uC0AtcA7nygcdYaKg&s"
      },
      {
        "id": 18,
        "name": "Dr. Maria Lopez",
        "gender": "Female",
        "specialist": "Otolaryngologist",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm0GYH1GyOeMoUCqodC6HcdPB2Rx3QN6C1eURk6694lQ&s"
      },
      {
        "id": 19,
        "name": "Dr. Christopher Young",
        "gender": "Male",
        "specialist": "Dentist",
        "url": "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg"
      },
      {
        "id": 20,
        "name": "Dr. Michelle Adams",
        "gender": "Female",
        "specialist": "Podiatrist",
        "url": "https://t3.ftcdn.net/jpg/01/14/89/28/360_F_114892812_Va0KWhvmSUOoYNEoHCAOJ8uYXzBiD8vY.jpg"
      },
      {
        "id": 21,
        "name": "Dr. William Turner",
        "gender": "Male",
        "specialist": "Neonatologist",
        "url": "https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg"
      },
      {
        "id": 22,
        "name": "Dr. Kimberly Baker",
        "gender": "Female",
        "specialist": "Geriatrician",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXNgQDsezMA-aTM4FeIn3nv_lQySN8Qsvf_at9j-Ysg&s"
      },
      {
        "id": 23,
        "name": "Dr. Samuel Perez",
        "gender": "Male",
        "specialist": "Plastic Surgeon",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3m06JJVyXc12r01nQyvC6bQu8LrZ6ycT1Sh24e8x3vA&s"
      },
      {
        "id": 24,
        "name": "Dr. Rachel Scott",
        "gender": "Female",
        "specialist": "Oncologist",
        "url": "https://www.shutterstock.com/image-photo/beautiful-female-doctor-holding-clipboard-260nw-151595504.jpg"
      },
      {
        "id": 25,
        "name": "Dr. Jason Lewis",
        "gender": "Male",
        "url": "https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.jpg?s=612x612&w=0&k=20&c=49wqOwwuonk9f8NACL7M_5RosqQPFwJ8-dpmeo9AvQw=",
        "specialist": "Gastroenterologist"
      }
    ]

export default data;

