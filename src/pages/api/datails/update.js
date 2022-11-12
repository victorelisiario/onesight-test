import path from 'path';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');

  //Read the json data file data.json
  const fileContents = JSON.parse(await fs.readFile(jsonDirectory + '/data.json', 'utf8'));

  // Update content
  console.log(fileContents)

  fileContents.push({ uuid: uuidv4(), name: "Pedro" })
  console.log(fileContents)

  // Save new data in the data.json file
  await fs.writeFile(jsonDirectory + "/data.json", JSON.stringify(fileContents), (err) => {
    if (err) { console.log(err); } else { console.log("Usuário inserido/alterado") }
  })

  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}

