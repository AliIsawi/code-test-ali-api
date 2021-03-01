import service from './service';
import { handler as io } from './io/index';

export const conditions = async (event, context) => {
  const result = service.conditions(event);
  return io.returnSuccess(result);
};
