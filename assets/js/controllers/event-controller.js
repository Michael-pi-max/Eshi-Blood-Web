import { db } from "../database/db.js";

export class EventController {
  save(event) {
    return db.event.add({
      ...event,
      status: "active",
      createdAt: new Date(),
      updateAt: new Date(),
      id_donors: [],
      is_deleted: false,
    });
  }

  async getAllEvents() {
    const events = await db.event
      .filter((event) => {
        return event.is_deleted == false;
      })
      .toArray();
    return events;
  }

  async getEvent(id) {
    const event = await db.event.get(id);
    return event;
  }

  async deleteEvent(id) {
    await db.event.update(id, { is_deleted: "true" }).then((update) => {
      console.log(update);
    });
  }

  async registerEvent(id_donor, id_event) {
    const event = await db.event.get(id_event);

    if (event.id_donors.includes(id_donor)) {
    } else {
      await db.event.update(id_event, {
        id_donors: [...event.id_donors, id_donor],
      });

      await db.appointment.add({
        start_date: new Date(event.createdAt),
        end_date: new Date(end_date),
        time: "",
        status: "active",
        id_donors: id_donor,
        id_donation_center: event.event_location,
        is_event_request: "event",
        id_event_request: id_event,
        createdAt: new Date(),
        updateAt: new Date(),
        is_deleted: false,
      });
    }
  }
}
