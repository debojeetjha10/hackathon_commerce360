import "./styles.css";

import  {useForm} from 'react-hook-form'
function CreateNewProduct() {
    const onSubmit = data => console.log(data)
    const { register, handleSubmit} = useForm()
  return (
    <div className="createnewproduct">
      <h4 className="text-primary">Create a New Product</h4>
      <hr className="text-dark"/>
      <p>Fill in the Details below</p>
      <form className="newproductform">
        <label>
          Product Name:
          <input  {...register("productName")} type="text" />
        </label>
        <label>
          Product Code:
          <input {...register("ProductCode")} type="text" />
        </label>
        <label>
          Product Catalog:
          <input {...register("productCatalog")} list="catalog" />
        </label>{" "}
        <label>
          Product Family:
          <input{...register("productFamily")}  type="text" />
        </label>{" "}
        <label>
          Product Family Code:
          <input {...register("productFamilyCode")} type="text" />
        </label>{" "}
        <label>
          Product Configuration:
          <input {...register("productConfiguration")} list="configuration" />
        </label>{" "}
        <label>
          Product Description:
          <textarea {...register("productDescription")} type="text" />
        </label>
        <label>
          Upload Image
          <input  type="file" />
        </label>
        <div className="createButton">
          <button type="submit" onClick={handleSubmit(onSubmit)}> Create </button>
        </div>
        <datalist id="catalog">
          <option value="AZURE" />
          <option value="X-box" />
          <option value="Micosoft 360" />
          <option value="Office" />
          <option value="OpenAI" />
        </datalist>
        <datalist id="configuration">
          <option value="Bundle" />
          <option value="Standalone" />
          <option value="Option" />
        </datalist>
      </form>
    </div>
  );
}

export default CreateNewProduct;
