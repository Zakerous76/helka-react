// import { useState } from "react";
// import { addFormSubmission } from "./database";

// export const useFormLogic = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await addFormSubmission(formData);

//       setSubmitStatus("success");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//       setTimeout(() => setSubmitStatus(null), 3000);
//     }
//   };

//   return {
//     formData,
//     isSubmitting,
//     submitStatus,
//     handleChange,
//     handleSubmit,
//   };
// };
