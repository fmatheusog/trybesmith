import CreateUserDto from './create-user.dto';

type LoginDto = Omit<CreateUserDto, 'name'>;

export default LoginDto;
