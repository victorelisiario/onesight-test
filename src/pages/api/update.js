import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');

  //Read the json data file data.json
  const candidates = JSON.parse(await fs.readFile(jsonDirectory + '/data.json', 'utf8'));

  // Find candidade index
  const uuid = req.body.uuid
  const candidateIndex = candidates.findIndex(candidate => candidate.uuid === uuid);

  // If candidate was found, remove it from array
  if (candidateIndex !== -1) {
    candidates[candidateIndex] = req.body;

    // Save new candidate array into data.json file
    await fs.writeFile(jsonDirectory + "/data.json", JSON.stringify(candidates), (err) => {
      if (err) { console.log(err); } else { console.log("Candidate deleted") }
    })

    // return success
    res.status(200).json(candidates);
  } else {

    // If candidate was not found, return Not found
    return response.json({ message: "Candidate not found" })
  }
}

