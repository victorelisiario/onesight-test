import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');

  //Read the json data file data.json
  const candidates = JSON.parse(await fs.readFile(jsonDirectory + '/data.json', 'utf8'));

  // Define uuid array to be delete 
  const uuidToBeDelete = req.body.isChecked;

  // for each uuid
  uuidToBeDelete.map(uuid => {
    // Find current uuid index
    const candidateIndex = candidates.findIndex(candidate => candidate.uuid === uuid);

    // If uuid was found, remove object from array
    if (candidateIndex !== -1) {
      candidates.splice(candidateIndex, 1);
    }
  })

  // Save new candidate array into data.json file
  await fs.writeFile(jsonDirectory + "/data.json", JSON.stringify(candidates), (err) => {
    if (err) { console.log(err); } else { console.log("Candidate deleted") }
  })

  // return success
  res.status(200).json(candidates);
}



