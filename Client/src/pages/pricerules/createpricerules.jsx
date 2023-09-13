import { useForm } from "react-hook-form";
import "../product/styles.css";
function CreatePriceRules() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="createnewproduct">
      <h2>Create a New Price Rules</h2>
      <p>Fill in the Details below</p>
      <form className="newproductform">
        <label>
          Rule Name:
          <input {...register("ruleName")} type="text" />
        </label>
        <label>
          Description:
          <input {...register("description")} type="text" />
        </label>
        <label>
          Applicable To:
          <input {...register("applicableTo")} list="applicableTo" />
          <datalist id="applicableTo">
            <option value="Product1" />
            <option value="Product2" />
            <option value="Product3" />
            <option value="Product4" />
          </datalist>
        </label>{" "}
        <label>
          Applied At:
          <input {...register("appliedAt")} list="appliedAt" />
          <datalist id="appliedAt">
            <option value="GOVT" />
            <option value="School" />
            <option value="Indivisual" />
          </datalist>
        </label>
        <label>
          Price List:
          <input {...register("priceList")} list="priceList" />
          <datalist id="priceList">
            <option value="PriceList1" />
            <option value="PriceList2" />
            <option value="PriceList3" />
          </datalist>
        </label>
        <label>
          Product Family:
          <input {...register("productFamily")} list="productFamily" />
          <datalist id="productFamily">
            <option value="family1" />
            <option value="family2" />
            <option value="family3" />
          </datalist>
        </label>
        <label>
          Catalog:
          <input {...register("catalog")} list="catalog" />
          <datalist id="catalog">
            <option value="catalog1" />
            <option value="catalog2" />
            <option value="catalog3" />
          </datalist>
        </label>
        <label>
          Start Effective date:
          <input {...register("startEffectivedate")} type="date" />
        </label>
        <label>
          End Effective date:
          <input {...register("endEffectivedate")} type="date" />
        </label>
        <label>
          isActive
          <input {...register("isActive")} type="checkbox" />
        </label>
        <div className="createButton">
          <button type="submit" onClick={handleSubmit(onSubmit)}>
            {" "}
            Create{" "}
          </button>
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

export default CreatePriceRules;
