import path from 'path';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');

  //Read the json data file data.json
  const fileContents = JSON.parse(await fs.readFile(jsonDirectory + '/data.json', 'utf8'));

  // Create new candidate object
  const newCandidate = {
    uuid: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
    image: req.body.image,
    description: req.body.description,
    skills: req.body.skills,
    meeting: req.body.meeting,
  }

  // Push new cadidate to candidates array
  fileContents.push(newCandidate)

  // Save new candidate array into data.json file
  await fs.writeFile(jsonDirectory + "/data.json", JSON.stringify(fileContents), (err) => {
    if (err) { console.log(err); } else { console.log("Usuário inserido/alterado") }
  })

  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}

