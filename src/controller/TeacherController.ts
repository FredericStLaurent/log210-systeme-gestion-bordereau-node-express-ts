import { Teacher } from '../model/Teacher';
import type { TeacherJSON } from '../model';

// classe contrôleur GRASP
export class TeacherController {

    /**
    *  opérations systèmes
    */

     public login(email: string, password: string) {
      console.log(email)
      let teacher = Teacher.login(email, password);
      if (teacher !== null)
          return teacher;


      throw new Error("Email and password do not match teacher");
    }

    public fromToken(token: string) {
      return Teacher.fromToken(token);
    }
  

    public all():TeacherJSON[] {
      return Teacher.all()
    }



}
