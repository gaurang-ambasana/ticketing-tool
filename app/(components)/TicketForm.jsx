"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TicketForm = ({ EDITMODE, id }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({});

  const categories = [
    "Hardware Issues",
    "IT Support",
    "N/W Access",
    "Support Request",
  ];
  const statuses = ["Not Started", "Started", "Done"];

  useEffect(() => {
    if (EDITMODE) {
      fetch(`http://localhost:3000/api/tickets/${id}`)
        .then((res) => res.json())
        .then((data) => setFormData(data.ticketData))
        .catch((err) => console.error("Failed fetch ticket: ", err));
    } else {
      setFormData({
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "Not Started",
        category: "Hardware Issues",
      });
    }
  }, [EDITMODE, id]);

  const handleChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = `/api/tickets${EDITMODE ? `/${id}` : ""}`;

    const res = await fetch(endpoint, {
      method: EDITMODE ? "PUT" : "POST",
      body: JSON.stringify({ formData }),
      "Content-Type": "application/json",
    });

    if (!res.ok) {
      throw new Error(`Failed to ${EDITMODE ? "update" : "create"} ticket`);
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        <h3>{EDITMODE ? "Update" : "Create"} Your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categories?.map((category, idx) => (
            <option key={idx} value={category}>
              {category}
            </option>
          ))}
        </select>
        <label>Priority</label>
        <div>
          {Array(5)
            .fill()
            .map((_, idx) => (
              <>
                <input
                  id={`priority-${idx + 1}`}
                  name="priority"
                  type="radio"
                  onChange={handleChange}
                  value={idx + 1}
                  checked={formData.priority == idx + 1}
                />
                <label>{idx + 1}</label>
              </>
            ))}
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          {statuses?.map((category, idx) => (
            <option key={idx} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="submit"
          className="btn max-w-xs"
          value={`${EDITMODE ? "Update" : "Create"} Ticket`}
        />
      </form>
    </div>
  );
};

export default TicketForm;
