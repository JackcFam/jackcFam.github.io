package communityuni.com;

import java.util.Scanner;

public class IfElse {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		kiemTraNamNhuan();
		String aString = (5 % 2 == 0) ? "true" : "false";
		System.out.println("\n" + aString);

	}

	public static void kiemTraNamNhuan() {
		System.out.println("mời bạn nhập năm: ");
		int y = new Scanner(System.in).nextInt();
		if (y % 400 == 0 || y % 4 == 0 && y % 100 != 0) {
			System.out.println("Năm " + y + " là năm nhuận");
		} else {
			System.out.printf("Năm %d không phải là năm nhuận", y);
		}
	}

}
