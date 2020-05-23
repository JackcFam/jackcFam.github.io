package communityuni.com;

public class HocCacToanTu {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int b = 5;
		int c =10;
		int z = --b + c++ + b++ - --c ;
		// 4 + c++ + b++ - --c; b 4, c 10
		// 4 + 10 + b++ - --c; b =4, c =11
		// 4 + 10 + 4 - --c; b = 5, c = 11
		// 4 + 10 + 4 - 10 
		
		// ++b trả về kết quả sau khi tăng;
		// b++ trả về kết quả trước khi tăng;
		System.out.println(z);
		
	}

}
