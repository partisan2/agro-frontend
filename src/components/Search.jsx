import { useState} from 'react'
import axios from "../axiosInstance";
import CropDisplay from './CropDisplay';
const crops = [
  { id: 1, name: "Betel" },
  { id: 2, name: "Pepper" },
  { id: 3, name: "Ginger" },
  { id: 4, name: "Tumeric" },
  { id: 5, name: "Cinnamon" },
];

const Search = () => {
    const [selectedCropId, setSelectedCropId] = useState("");
    const [cropData,setCropData] = useState()
    const [cropEstData,setCropEstData] = useState()
    const [cropFertilizer,setCropFertilizer] = useState()
    const [cropDisease,setCropDisease] = useState()
    const [cropHarvesting,setCropHarvesting] = useState()
    const [cropClimate,setCropClimate] = useState()
    const [cropVariety,setVariety] = useState()
    const [cropPest,setCropPest] = useState()
    const [cropPrice,setCropPrice]=useState()
    const [loans,setLoans] = useState()
    const [loading, setLoading] = useState(false);

  const handleCropSearch = async () => {
    if (!selectedCropId) return alert("Select Crop");
    setLoading(true);
    try {
      const response = await axios.get('/crop', { params: { cropId: selectedCropId } });
      if (response.status === 200) {
        setCropData(response.data);
        // Parallel fetching
        getCropEstablishment();
        getCropClimate();
        getCropDisease();
        getCropFerilizer();
        getCropHarvesting();
        getCropPest();
        getCropVariety();
        getCropPrice();
        getLoans();
      }
    } catch (error) {
      console.log("Get crop details", error);
    } finally {
      setLoading(false);
    }
  };



    const getCropEstablishment = async () =>{
        try{
          const response = await axios.get(
            '/crop-establishment',
            {
              params: { cropId: selectedCropId }
            }
          )
          if (response.status === 200) {
            // console.log("Crop est fetched successfully:", response.data);
            setCropEstData(response.data)
          }
        }catch(error){
          console.log("Get crop details", error);
        }
    }

    const getCropClimate = async () =>{
        try{
          const response = await axios.get(
            '/climate',
            {
              params: { cropId: selectedCropId }
            }
          )
          if (response.status === 200) {
            // console.log("Crop climate fetched successfully:", response.data);
            setCropClimate(response.data)
          }
        }catch(error){
          console.log("Get crop details", error);
        }
    }

    const getCropDisease = async () =>{
        try{
          const response = await axios.get(
            '/disease',
            {
              params: { cropId: selectedCropId }
            }
          )
          if (response.status === 200) {
            // console.log("Crop disease fetched successfully:", response.data);
            setCropDisease(response.data)
          }
        }catch(error){
          console.log("Get crop details", error);
        }
    }

    const getCropFerilizer = async () =>{
        try{
          const response = await axios.get(
            '/fertilizer',
            {
              params: { cropId: selectedCropId }
            }
          )
          if (response.status === 200) {
            // console.log("Crop fertilizer fetched successfully:", response.data);
            setCropFertilizer(response.data)
          }
        }catch(error){
          console.log("Get crop details", error);
        }
    }

    const getCropHarvesting = async () =>{
        try{
          const response = await axios.get(
            '/harvesting',
            {
              params: { cropId: selectedCropId }
            }
          )
          if (response.status === 200) {
            // console.log("Crop harvesting fetched successfully:", response.data);
            setCropHarvesting(response.data)
          }
        }catch(error){
          console.log("Get crop details", error);
        }
    }
    const getCropPest = async () =>{
        try{
          const response = await axios.get(
            '/pest',
            {
              params: { cropId: selectedCropId }
            }
          )
          if (response.status === 200) {
            // console.log("Crop pest fetched successfully:", response.data);
            setCropPest(response.data)
          }
        }catch(error){
          console.log("Get crop details", error);
        }
    }

    const getCropVariety = async () =>{
        try{
          const response = await axios.get(
            '/variety',
            {
              params: { cropId: selectedCropId }
            }
          )
          if (response.status === 200) {
            // console.log("Crop variety fetched successfully:", response.data);
            setVariety(response.data)
          }
        }catch(error){
          console.log("Get crop details", error);
        }
    }

    const getCropPrice = async () =>{
          try{
            const response = await axios.get(
              '/price',
              {
                params: { cropId: selectedCropId }
              }
            )
            if (response.status === 200) {
              // console.log("Crop price fetched successfully:", response.data);
              setCropPrice(response.data)
            }
          }catch(error){
            console.log("Get crop details", error);
          }
      }

      const getLoans = async () =>{
          try{
            const response = await axios.get(
              '/loan-scheme',
              {
                params: { cropId: selectedCropId }
              }
            )
            if (response.status === 200) {
              // console.log("loans fetched successfully:", response.data);
              setLoans(response.data)
            }
          }catch(error){
            console.log("Get loan details", error);
          }
      }

  return (
    <div className=' h-[100vh]'>
      <div className={`flex justify-center items-center ${cropData ? '':'h-full' }`}>
        <div className='mt-6 py-8 px-20 backdrop-opacity-10 bg-green-50 rounded-lg shadow-lg'>
          <h2 className="text-2xl font-bold text-center mb-10">Search Your Requirements</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="space -y-4 w-full max-w-md">
              <div>
                <label className="block font-medium">Select a Crop</label>
                <select
                  className="w-full mt-1 p-2 border rounded"
                  value={selectedCropId}
                  onChange={(e) => setSelectedCropId(e.target.value)}
                >
                  <option value="">Select</option>
                  {crops.map((crop) => (
                    <option key={crop.id} value={crop.id}>
                      {crop.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex justify-center py-4 '>
                  <button 
                    className='px-3 py-2 bg-green-600 text-white rounded-md'
                    onClick={handleCropSearch}
                    disabled={loading}
                  >
                    {loading ? "Searching..." : "Search"}
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {cropData ?
        <CropDisplay cropData={cropData} cropDisease={cropDisease} cropFertilizer={cropFertilizer} climate={cropClimate} cropEst={cropEstData} cropHarvesting={cropHarvesting} variety={cropVariety} pest={cropPest} price={cropPrice} loans={loans}/>
        : '' 
      }
    </div>
  )
}

export default Search