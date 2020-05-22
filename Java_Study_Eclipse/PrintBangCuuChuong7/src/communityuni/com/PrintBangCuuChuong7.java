package communityuni.com;

import java.util.Scanner;

public class PrintBangCuuChuong7 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int ketQua = 1;
		for (int i = 1; i <= 10; i++) {
			ketQua = 7 * i;
			System.out.println("7*" + i + "=" + ketQua);
		}
		System.out.println("====================");
		demo2();
		// tinhTB();

	}

	public static void tinhTB() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Nhập số a: ");
		int a = sc.nextInt();
		int tong = 0;
		int temp = 0;
		if (a < 27 && a > 250) {
			System.out.println("số vừa nhập nhỏ hơn 27");
		} else {
			for (int i = 27; i <= a; i++) {
				if (i % 3 == 0) {
					tong += i;
					temp++;
				}
			}
			System.out.println("Trung bình cộng %3 là:" + tong / temp);
		}
	}

	public static void demo() {
		for (int i = 0; i < 2; i++) {
			for (int j = 1; j < 10; j++) {
				if (j % 3 == 0) {
					continue;
				}
				System.out.println("j=" + j);
			}
			System.out.println("i=" + i);
		}
	}

	// thuật toán sắp xếp mảng theo chiều giảm dần
	public static void demo2() {
		int a[] = { 1, 16, 17, 83, 12, 13, 14, 15, 16, 78, 4 };
		for (int i = 0; i < a.length - 1; i++) {
			for (int j = i + 1; j < a.length; j++) {
				if (a[i] > a[j]) {
					int temp = a[i];
					a[i] = a[j];
					a[j] = temp;
				}
			}
		}
		
	}

}
