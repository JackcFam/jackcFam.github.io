package communityuni.com;

import java.util.Scanner;

public class NhapDuLieuTuBanPhim {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("mời bạn nhập tuổi:");
		int age = sc.nextInt();
		System.out.println("số bạn vừa nhập là: " + age);
		System.out.println("mời bạn nhập tên của mình");
		String nameString = new Scanner(System.in).nextLine();
		System.out.println("tên của bạn là: " + nameString);
		System.out.println("Mời bạn nhập cân nặng của bạn");
		double weight = sc.nextDouble();
		System.out.println("cân nặng của bạn là: "+weight);
	}
}
