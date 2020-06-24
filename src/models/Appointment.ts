import { uuid } from 'uuidv4';

class Appointment {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  constructor({ title, value, type }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Appointment;
