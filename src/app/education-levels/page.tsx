import { fetchEducationLevels } from '@/http'

export default async function EducationLevelsPage() {
  const educationLevels = await fetchEducationLevels()

  return (
    <ul>
      {educationLevels?.data.map(educationLevel => (
        <li key={educationLevel.id}>{educationLevel.levelName}</li>
      ))}
    </ul>
  )
}
