package communityuni.com;

import java.util.Scanner;

public class SwitchCase {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner =  new Scanner(System.in);
		System.out.println("mời bạn nhập tháng: ");
		int month = scanner.nextInt();
		switch (month) {
		case 1:
			System.out.println("tháng có 31 ngày");
			break;
		case 2: 
			System.out.println("tháng có 28 ngày");
			break;
		case 3:
			System.out.println("tháng có 30 ngày");
			break;
		default:
			System.exit(0);
			break;
		}
	}

}
